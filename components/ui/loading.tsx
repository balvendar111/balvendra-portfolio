import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  variant = 'spinner', 
  size = 'md', 
  className,
  text 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (variant === 'spinner') {
    return (
      <div className={cn('flex flex-col items-center justify-center', className)}>
        <div
          className={cn(
            'animate-spin rounded-full border-2 border-gray-300 border-t-primary-600',
            sizeClasses[size]
          )}
        />
        {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex flex-col items-center justify-center', className)}>
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                'rounded-full bg-primary-600 animate-bounce',
                size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={cn('flex flex-col items-center justify-center', className)}>
        <div
          className={cn(
            'rounded-full bg-primary-600 animate-pulse',
            sizeClasses[size]
          )}
        />
        {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
      </div>
    );
  }

  if (variant === 'skeleton') {
    return (
      <div className={cn('space-y-3', className)}>
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 h-12 w-12"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Full page loading component
export const PageLoading: React.FC<{ text?: string }> = ({ text = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <Loading variant="spinner" size="lg" />
        <p className="mt-4 text-lg text-gray-600">{text}</p>
      </div>
    </div>
  );
};

// Section loading component
export const SectionLoading: React.FC<{ text?: string }> = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center py-12">
      <Loading variant="dots" size="md" text={text} />
    </div>
  );
};

export default Loading; 