import { Input } from "@/components/ui/input"

export function Search() {
  const handleKeyPress = (event) => {
    if (event.key === 'k' && event.metaKey) {
      event.preventDefault();
      // Activate search functionality here
    }
  };

  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}
