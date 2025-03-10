/*
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * boxStr convert to screen coords
 * @param boxStr box string (format: "[x1,y1,x2,y2]" or "[x,y]")
 * @param width screen width
 * @param height screen height
 * @param factor scale factor
 * @returns calculated center point coords {x, y}
 */
export function parseBoxToScreenCoords(
  boxStr: string,
  width: number,
  height: number,
  factor: number,
): { x: number; y: number } {
  const coords = boxStr
    .replace('[', '')
    .replace(']', '')
    .split(',')
    .map((num) => parseFloat(num.trim()));

  const [x1, y1, x2 = x1, y2 = y1] = coords;

  return {
    x: Math.round(((x1 + x2) / 2) * width * factor) / factor,
    y: Math.round(((y1 + y2) / 2) * height * factor) / factor,
  };
}
