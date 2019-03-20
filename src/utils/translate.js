/**
 * Mutliply a matrix by translation amounts.
 *
 * @param {Matrix4} m matrix to multiply
 * @param {number} tx x translation.
 * @param {number} ty y translation.
 * @param {number} tz z translation.
 *
 * @return {Matrix4} a new matrix
 */
const translate = (m, tx, ty, tz) => {
  const m00 = m[0];
  const m01 = m[1];
  const m02 = m[2];
  const m03 = m[3];
  const m10 = m[4];
  const m11 = m[5];
  const m12 = m[6];
  const m13 = m[7];
  const m20 = m[8];
  const m21 = m[9];
  const m22 = m[10];
  const m23 = m[11];
  const m30 = m[12];
  const m31 = m[13];
  const m32 = m[14];
  const m33 = m[15];

  const M = new Float32Array(16);

  M[0] = m00;
  M[1] = m01;
  M[2] = m02;
  M[3] = m03;
  M[4] = m10;
  M[5] = m11;
  M[6] = m12;
  M[7] = m13;
  M[8] = m20;
  M[9] = m21;
  M[10] = m22;
  M[11] = m23;
  M[12] = m00 * tx + m10 * ty + m20 * tz + m30;
  M[13] = m01 * tx + m11 * ty + m21 * tz + m31;
  M[14] = m02 * tx + m12 * ty + m22 * tz + m32;
  M[15] = m03 * tx + m13 * ty + m23 * tz + m33;

  return M;
}

export default translate;
