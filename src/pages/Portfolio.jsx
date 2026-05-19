// src/pages/Portfolio.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'

function PageHero() {
  return (
    <section className="pt-32 pb-16 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="container relative">
        <p className="label mb-4 anim-fade-in">Portfolio</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-tight mb-5 anim-fade-up">
          Stores we've built<br /><span className="text-gradient">and how we built them.</span>
        </h1>
        <p className="text-white/40 font-body text-lg leading-relaxed max-w-xl anim-fade-up d-200">
          Each project below shows the challenge we were handed, what we actually implemented, and what the store looked like after.
        </p>
      </div>
    </section>
  )
}

function ProjectDetail({ project, index }) {
  const [ref, inView] = useInView()
  const isEven = index % 2 === 0

  return (
    <section
      ref={ref}
      id={project.id}
      className={`section border-t border-white/5 reveal ${inView ? 'show' : ''} ${isEven ? 'bg-bg-primary' : 'bg-bg-secondary'}`}
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-body font-medium uppercase tracking-widest ${project.accentColor}`}>
                {project.badge}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-xs text-white/55 font-body uppercase tracking-widest">{project.category}</span>
            </div>
            <h2 className="font-display font-black text-4xl text-white mb-2">{project.name}</h2>
            <p className="text-white/45 font-body">{project.summary}</p>
          </div>
          <div className={`flex-shrink-0 w-28 h-28 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <span className={`font-display font-black text-4xl ${project.accentColor} opacity-40`}>
              {project.name[0]}
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.metrics.map(m => (
            <span key={m} className="px-4 py-2 rounded-full glass text-sm text-white/50 font-body">{m}</span>
          ))}
          {project.tags.map(t => (
            <span key={t} className="px-4 py-2 rounded-full bg-accent-blue/10 text-xs text-accent-blue font-body font-medium">{t}</span>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Challenge */}
          <div className="card p-6">
            <p className="label mb-4">The Challenge</p>
            <p className="text-sm text-white/45 font-body leading-relaxed">{project.challenge}</p>
          </div>

          {/* Implemented */}
          <div className="card p-6 lg:col-span-1">
            <p className="label mb-4">What We Implemented</p>
            <ul className="flex flex-col gap-2.5">
              {project.implemented.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="font-display font-black text-xs text-accent-blue/30 flex-shrink-0 mt-0.5">
                    {String(i+1).padStart(2,'0')}
                  </span>
                  <span className="text-sm text-white/45 font-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className={`card p-6 border-accent-blue/15 bg-gradient-to-br ${project.color}`}>
            <p className="label mb-4">Outcome</p>
            <p className="text-sm text-white/55 font-body leading-relaxed">{project.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PortfolioCTA() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`section bg-bg-secondary reveal ${inView ? 'show' : ''}`}>
      <div className="container text-center max-w-xl mx-auto">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
          Want similar results for your store?
        </h2>
        <p className="text-white/40 font-body mb-7 leading-relaxed">
          Tell us about your business and we'll scope out a clear plan for your store setup.
        </p>
        <Link to="/contact" className="btn-primary">Start a Project →</Link>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <>
      <PageHero />
      {projects.map((p, i) => <ProjectDetail key={p.id} project={p} index={i} />)}
      <PortfolioCTA />
    </>
  )
}
