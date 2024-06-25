export default function Numbers({
  nums1,
  nums2,
  translateColums1,
  translateColums2,
}) {
  return (
    <div className="numberContainer">
      <div className="nums1">
        <div
          className="transition"
          style={{
            transform: `translateY(${-10 * translateColums1}%)`,
          }}
        >
          {nums1.map((num, i) => {
            return (
              <div key={i} className="number">
                {num}
              </div>
            );
          })}
        </div>
      </div>
      <div className="nums2">
        <div
          className="transition"
          style={{
            transform: `translateY(${-10 * translateColums2}%)`,
          }}
        >
          {nums2.map((num, i) => {
            return (
              <div key={i} className="number">
                {num}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
