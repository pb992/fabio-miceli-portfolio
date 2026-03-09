'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

function MobileGradientFallback() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-cyan-900/20 animate-pulse"
           style={{ animationDuration: '4s' }} />
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/10 via-transparent to-indigo-900/20 animate-pulse"
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
    </div>
  )
}

const noiseGLSL = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = /* glsl */ `
${noiseGLSL}
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uScroll;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  vec2 scaledUv = vec2(uv.x * aspect, uv.y);
  vec2 mouseOffset = (uMouse - 0.5) * 0.15;
  vec2 warpedUv = scaledUv + mouseOffset * smoothstep(0.8, 0.0, length(uv - 0.5));
  warpedUv.y += uScroll * 0.3;
  float t = uTime * 0.12;
  float n1 = snoise(vec3(warpedUv * 1.2, t * 0.8));
  float n2 = snoise(vec3(warpedUv * 2.5 + 3.0, t * 1.2 + 10.0));
  float n3 = snoise(vec3(warpedUv * 4.0 + 7.0, t * 1.6 + 20.0));
  float combined = n1 * 0.5 + n2 * 0.35 + n3 * 0.15;
  float band = smoothstep(-0.3, 0.3, combined) * smoothstep(1.1, 0.4, combined);
  vec3 deepPurple = vec3(0.35, 0.25, 0.95);
  vec3 electricBlue = vec3(0.28, 0.55, 1.0);
  vec3 cyan = vec3(0.15, 0.90, 0.98);
  vec3 pink = vec3(0.95, 0.30, 0.65);
  float colorMix = combined * 0.5 + 0.5;
  vec3 color;
  if (colorMix < 0.33) {
    color = mix(deepPurple, electricBlue, colorMix / 0.33);
  } else if (colorMix < 0.66) {
    color = mix(electricBlue, cyan, (colorMix - 0.33) / 0.33);
  } else {
    color = mix(cyan, electricBlue, (colorMix - 0.66) / 0.34);
  }
  float pinkMask = smoothstep(0.4, 0.7, n3) * 0.4;
  color = mix(color, pink, pinkMask);
  float alpha = band * 1.3;
  alpha = min(alpha, 1.0);
  float vignette = 1.0 - smoothstep(0.65, 1.2, length(uv - 0.5));
  alpha *= vignette;
  float centerGlow = smoothstep(0.7, 0.0, length(uv - vec2(0.5, 0.45))) * 0.4;
  alpha += centerGlow;
  alpha = min(alpha, 1.0);
  gl_FragColor = vec4(color, alpha);
}
`

// Module-level refs for mouse/scroll — written by native events, read by useFrame.
// This avoids ANY React re-renders from mouse/scroll input.
const _mouse = new THREE.Vector2(0.5, 0.5)
let _scroll = 0

function AuroraPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const { viewport } = useThree()
  const target = useMemo(() => new THREE.Vector2(0.5, 0.5), [])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uScroll: { value: 0 },
  }), [])

  useFrame((state) => {
    if (!materialRef.current) return
    const u = materialRef.current.uniforms
    u.uTime.value = state.clock.elapsedTime
    u.uResolution.value.set(viewport.width, viewport.height)
    // Smooth lerp toward target mouse position
    target.set(_mouse.x, _mouse.y)
    u.uMouse.value.lerp(target, 0.08)
    u.uScroll.value = _scroll
  })

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mobile =
      window.matchMedia('(max-width: 768px)').matches ||
      navigator.maxTouchPoints > 0
    if (mobile) return

    const onScroll = () => {
      _scroll = window.scrollY / window.innerHeight
    }
    const onMouse = (e: MouseEvent) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      _mouse.x = (e.clientX - rect.left) / rect.width
      _mouse.y = 1.0 - (e.clientY - rect.top) / rect.height
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  // SSR-safe mobile check
  if (typeof window !== 'undefined' && (
    window.matchMedia('(max-width: 768px)').matches ||
    navigator.maxTouchPoints > 0
  )) {
    return <MobileGradientFallback />
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <AuroraPlane />
      </Canvas>
    </div>
  )
}
