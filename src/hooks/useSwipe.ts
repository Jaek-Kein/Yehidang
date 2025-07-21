import { useEffect, type RefObject } from "react";

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  lastPage: number;
  threshold?: number;
}

const useSwipe = ({
  containerRef,
  page,
  setPage,
  lastPage,
  threshold = 50,
}: Props) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let touchEndY = 0;
    let isScrollingDiv = false;

    const isScrollable = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      return el.scrollHeight > el.clientHeight;
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;

      // 스크롤 가능한 내부 요소에서 터치가 시작됐는지 확인
      const target = e.target as HTMLElement;

      // 스크롤 가능한 영역을 타겟으로 했는지 파악
      isScrollingDiv = false;
      let node: HTMLElement | null = target;

      while (node && node !== container) {
        if (isScrollable(node) && getComputedStyle(node).overflowY !== "visible") {
          isScrollingDiv = true;
          break;
        }
        node = node.parentElement;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      if (!isScrollingDiv) handleSwipe(); // 스크롤 중이 아니면만 페이지 전환
    };

    const handleSwipe = () => {
      const deltaY = touchStartY - touchEndY;

      if (deltaY > threshold) {
        setPage((prev) => Math.min(prev + 1, lastPage));
      } else if (deltaY < -threshold) {
        setPage((prev) => Math.max(prev - 1, 0));
      }
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [containerRef, page, setPage, lastPage, threshold]);
};


export default useSwipe;
