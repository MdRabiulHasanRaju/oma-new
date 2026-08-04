import { Component, type ReactNode } from 'react';

interface State { hasError: boolean }

export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
          <p className="text-muted-foreground">Please refresh the page to try again.</p>
          <button onClick={() => window.location.reload()} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}
