/**
 * Makes an y rotation matrix
 *
 * @param {number} angle amount to rotate
 *
 * @return {Matrix4} a new matrix
 */
const yRotation = (angle) => {
  const angleRad = angle * 180 / Math.PI

  const c = Math.cos(angleRad);
  const s = Math.sin(angleRad);

  const M = new Float32Array(16);

  M[0] = c;
  M[2] = -s;
  M[5] = 1;
  M[8] = s;
  M[10] = c;
  M[15] = 1;

  return M;
}

export default yRotation;
