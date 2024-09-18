import { useState } from "react";

export default function useMouseHover() {
	const [hoverPositions, setHoverPositions] = useState<{
		[key: string]: { x: number; y: number };
	}>({});
	const handleMouseHover = (e: React.MouseEvent, id: number) => {
		let debounceTimer;
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			setHoverPositions((prev) => ({ ...prev, [id]: undefined }));
		}, 1000);
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setHoverPositions((prev) => ({ ...prev, [id]: { x, y } }));
	};

  return { hoverPositions, handleMouseHover };
}
