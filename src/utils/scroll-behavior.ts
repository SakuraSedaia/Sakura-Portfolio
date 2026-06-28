/**
 * The purpose of this function is to convert vertical wheel events to horizontal scrolling on a container
 * @param event
 */
export function handleHorizontalWheel(event: WheelEvent) {
  const target = event.currentTarget as HTMLElement;

  if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

  const maxScrollLeft = target.scrollWidth - target.clientWidth;
  const isScrollingRight = event.deltaY > 0;
  const isScrollingLeft = event.deltaY < 0;
  const canScrollHorizontally = maxScrollLeft > 0;
  const canScrollRight = target.scrollLeft < maxScrollLeft;
  const canScrollLeft = target.scrollLeft > 0;

  if (
    !canScrollHorizontally ||
    (isScrollingRight && !canScrollRight) ||
    (isScrollingLeft && !canScrollLeft)
  ) {
    return;
  }

  event.preventDefault();

  // Webstorm throws a warning here regarding unintended behavior, but the code is designed to cross the mappings intentionally.
  // noinspection JSSuspiciousNameCombination
  target.scrollLeft += event.deltaY;
}
