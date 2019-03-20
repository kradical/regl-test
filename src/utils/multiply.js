/**
* Takes two 4-by-4 matrices, a and b, and computes the product in the order
* that pre-composes b with a.  In other words, the matrix returned will
* transform by b first and then a.  Note this is subtly different from just
* multiplying the matrices together.  For given a and b, this function returns
* the same object in both row-major and column-major mode.
*
* @param {Matrix4} a A matrix.
* @param {Matrix4} b A matrix.
*
* @return {Matrix4} a new matrix
*/
const multiply = (a, b) => {
  const a00 = a[0];
  const a01 = a[1];
  const a02 = a[2];
  const a03 = a[3];
  const a10 = a[4];
  const a11 = a[5];
  const a12 = a[6];
  const a13 = a[7];
  const a20 = a[8];
  const a21 = a[9];
  const a22 = a[10];
  const a23 = a[11];
  const a30 = a[12];
  const a31 = a[13];
  const a32 = a[14];
  const a33 = a[15];

  const b00 = b[0];
  const b01 = b[1];
  const b02 = b[2];
  const b03 = b[3];
  const b10 = b[4];
  const b11 = b[5];
  const b12 = b[6];
  const b13 = b[7];
  const b20 = b[8];
  const b21 = b[9];
  const b22 = b[10];
  const b23 = b[11];
  const b30 = b[12];
  const b31 = b[13];
  const b32 = b[14];
  const b33 = b[15];

  const M = new Float32Array(16);

  M[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
  M[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
  M[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
  M[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
  M[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
  M[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
  M[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
  M[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
  M[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
  M[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
  M[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
  M[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
  M[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
  M[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
  M[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
  M[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;

  return M;
}

export default multiply;
