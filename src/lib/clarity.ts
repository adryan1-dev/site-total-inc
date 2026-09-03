import Clarity from '@microsoft/clarity'

const CLARITY_PROJECT_ID = 'yc8d2ig6u0'

export function shouldInitClarity(
  projectId: string | undefined,
  mode: string,
): projectId is string {
  return Boolean(projectId?.trim()) && mode !== 'test'
}

export function initClarity() {
  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim() || CLARITY_PROJECT_ID
  if (!shouldInitClarity(projectId, import.meta.env.MODE)) return
  if ('clarity' in window) return
  Clarity.init(projectId)
}
