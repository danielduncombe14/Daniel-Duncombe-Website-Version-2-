/**
 * ProjectCard Component Example
 * Demonstrates Tailwind v4 + Master Theme integration
 * Using utility classes mapped from CSS custom properties
 */

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'live' | 'process' | 'beta';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export function ProjectCard({
  title,
  description,
  status,
  tags,
  githubUrl,
  liveUrl,
  caseStudyUrl,
}: ProjectCardProps) {
  return (
    <div
      className="
        bg-[var(--bg-card)]
        backdrop-blur-[var(--glass-blur-strong)]
        border border-[var(--glass-border-color)]
        rounded-[var(--card-radius)]
        shadow-[var(--card-shadow)]
        p-[var(--space-xl)]
        transition-[var(--transition-all)]
        hover:bg-[var(--bg-card-hover)]
        hover:border-[var(--brand-orange)]
        hover:shadow-[var(--card-shadow-hover)]
        hover:-translate-y-0.5
        group
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-[var(--space-md)]">
        <h3
          className="
            text-[var(--text-primary)]
            text-[var(--text-2xl)]
            font-[var(--font-weight-bold)]
            leading-[var(--leading-tight)]
            tracking-[var(--tracking-tight)]
          "
        >
          {title}
        </h3>
        
        {/* Status Badge */}
        <Badge
          className={`
            px-[var(--space-sm)]
            py-[var(--spacing-xs)]
            rounded-[var(--radius-full)]
            text-[var(--text-xs)]
            font-[var(--font-weight-semibold)]
            ${
              status === 'live'
                ? 'bg-[var(--status-live)] text-[var(--bg-primary)]'
                : status === 'process'
                ? 'bg-[var(--status-process)] text-[var(--bg-primary)]'
                : 'bg-[var(--status-beta)] text-[var(--text-primary)]'
            }
          `}
        >
          {status === 'live' ? 'Live' : status === 'process' ? 'In Progress' : 'Beta'}
        </Badge>
      </div>

      {/* Description */}
      <p
        className="
          text-[var(--text-secondary)]
          text-[var(--text-base)]
          leading-[var(--leading-normal)]
          mb-[var(--space-lg)]
        "
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-[var(--space-xs)] mb-[var(--space-lg)]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              bg-[rgba(255,255,255,0.05)]
              text-[var(--text-muted)]
              text-[var(--text-sm)]
              px-[var(--space-sm)]
              py-[var(--spacing-xs)]
              rounded-[var(--radius-sm)]
              border border-[var(--border-subtle)]
              transition-[var(--transition-colors)]
              hover:border-[var(--brand-orange)]
              hover:text-[var(--brand-orange)]
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-[var(--space-sm)]">
        {caseStudyUrl && (
          <Button
            asChild
            className="
              bg-[var(--brand-orange)]
              text-[var(--text-primary)]
              rounded-[var(--inner-radius)]
              px-[var(--space-lg)]
              py-[var(--space-sm)]
              font-[var(--font-weight-semibold)]
              transition-[var(--transition-all)]
              hover:bg-[var(--brand-orange-light)]
              hover:shadow-[var(--brand-glow-hover)]
              hover:-translate-y-0.5
              active:bg-[var(--brand-orange-dark)]
              active:shadow-[var(--brand-glow-strong)]
            "
          >
            <a href={caseStudyUrl}>View Case Study</a>
          </Button>
        )}

        {githubUrl && (
          <Button
            asChild
            variant="outline"
            className="
              bg-transparent
              text-[var(--text-secondary)]
              border-[var(--border-medium)]
              rounded-[var(--inner-radius)]
              px-[var(--space-md)]
              py-[var(--space-sm)]
              transition-[var(--transition-all)]
              hover:border-[var(--brand-orange)]
              hover:text-[var(--brand-orange)]
              hover:bg-[rgba(209,130,79,0.1)]
            "
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        )}

        {liveUrl && (
          <Button
            asChild
            variant="outline"
            className="
              bg-transparent
              text-[var(--text-secondary)]
              border-[var(--border-medium)]
              rounded-[var(--inner-radius)]
              px-[var(--space-md)]
              py-[var(--space-sm)]
              transition-[var(--transition-all)]
              hover:border-[var(--brand-orange)]
              hover:text-[var(--brand-orange)]
              hover:bg-[rgba(209,130,79,0.1)]
            "
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div
        className="
          absolute inset-0
          rounded-[var(--card-radius)]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
          shadow-[var(--brand-glow)]
        "
      />
    </div>
  );
}


/**
 * ALTERNATIVE: Simplified Version with Tailwind Utilities
 * (If you extend tailwind.config to include theme variables)
 */

export function ProjectCardSimplified({
  title,
  description,
  status,
  tags,
}: ProjectCardProps) {
  return (
    <div className="card group relative">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <span className={`badge-${status}`}>
          {status === 'live' ? 'Live' : status === 'process' ? 'In Progress' : 'Beta'}
        </span>
      </div>

      <p className="text-white/70 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              bg-white/5 
              text-white/50 
              text-sm 
              px-2 py-1 
              rounded-lg 
              border border-white/10
              hover:border-[var(--brand-orange)]
              hover:text-[var(--brand-orange)]
              transition-colors
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}


/**
 * USAGE EXAMPLE:
 * 
 * <ProjectCard
 *   title="Financial Automation System"
 *   description="Automated monthly reconciliation workflows saving 40 hours/month"
 *   status="live"
 *   tags={['Python', 'Pandas', 'Automation', 'Excel']}
 *   caseStudyUrl="/projects/financial-automation-case-study"
 *   githubUrl="https://github.com/yourusername/project"
 * />
 */
