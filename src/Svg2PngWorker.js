import Canvg, { presets } from "canvg";

export async function processData(data) {
  const { width, height, svg, emSize } = data;
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d");
  const v = await Canvg.from(ctx, svg, {
    ...presets.offscreen(),
    emSize,
  });
  await v.render();
  const blob = await canvas.convertToBlob();
  const pngUrl = URL.createObjectURL(blob);
  return { pngUrl };
}
