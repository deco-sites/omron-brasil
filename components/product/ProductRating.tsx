export default function ProductRating() {
  return (
    <div class="flex items-end justify-center gap-2">
      <div class="rating">
        <input
          aria-label="Item do ranking"
          type="radio"
          name="rating-1"
          class="mask mask-star bg-blue-middle"
        />
        <input
          aria-label="Item do ranking"
          type="radio"
          name="rating-1"
          class="mask mask-star bg-blue-middle"
        />
        <input
          aria-label="Item do ranking"
          type="radio"
          name="rating-1"
          class="mask mask-star bg-blue-middle"
        />
        <input
          aria-label="Item do ranking"
          type="radio"
          name="rating-1"
          class="mask mask-star bg-blue-middle"
          checked
        />
        <input
          aria-label="Item do ranking"
          type="radio"
          name="rating-1"
          class="mask mask-star bg-blue-middle"
        />
      </div>

      <div class="flex items-center justify-center text-sm gap-1">
        <span>4.0</span>
        <span>(321)</span>
      </div>
    </div>
  );
}
