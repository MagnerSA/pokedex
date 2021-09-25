export function toggleButton({ selectedContent }: { selectedContent: number }) {
  return {
    type: 'TOGGLE_BUTTON',
    selectedContent,
  }
}