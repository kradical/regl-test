/**
 * Makes an x rotation matrix
 *
 * @param {number} angle amount to rotate
 *
 * @return {Matrix4} a new matrix
 */
const xRotation = (angle) => {
  const angleRad = angle * 180 / Math.PI

  const c = Math.cos(angleRad);
  const s = Math.sin(angleRad);

  const M = new Float32Array(16);

  M[0] = 1;
  M[5] = c;
  M[6] = s;
  M[9] = -s;
  M[10] = c;
  M[15] = 1;

  return M;
}

export default xRotation;
