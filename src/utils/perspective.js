/**
 * Computes a 4-by-4 perspective transformation matrix
 *
 * @param {number} angleOfView field of view in y axis.
 * @param {number} aspectRatio aspect ratio of viewport (width / height)
 * @param {number} near near Z clipping plane
 * @param {number} far far Z clipping plane
 *
 * @return {Matrix4} a new matrix
 */
const perspective = (angleOfView, aspectRatio, near, far) => {
  const fovRadians = angleOfView * 180 / Math.PI

  const f = Math.tan(Math.PI * 0.5 - 0.5 * fovRadians);
  const rangeInv = 1.0 / (near - far);

  const M = new Float32Array(16);

  M[0] = f / aspectRatio;
  M[5] = f;
  M[10] = (near + far) * rangeInv;
  M[11] = -1;
  M[14] = near * far * rangeInv * 2;

  return M;
}

export default perspective;
