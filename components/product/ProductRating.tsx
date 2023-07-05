export default function ProductRating() {
  return (
    <div class="flex items-end justify-center gap-2">
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star bg-[#005EB8]" />
        <input type="radio" name="rating-1" className="mask mask-star bg-[#005EB8]" />
        <input type="radio" name="rating-1" className="mask mask-star bg-[#005EB8]" />
        <input type="radio" name="rating-1" className="mask mask-star bg-[#005EB8]" checked />
        <input type="radio" name="rating-1" className="mask mask-star bg-[#005EB8]" />
      </div>

      <div class="flex items-center justify-center text-sm gap-1">
        <span>4.0</span>
        <span>(321)</span>
      </div>
    </div>
  )
}
