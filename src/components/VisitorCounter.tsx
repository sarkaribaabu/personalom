import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Users } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const incrementAndFetch = async () => {
      try {
        // Increment the counter using the database function
        const { data, error } = await supabase.rpc("increment_visitor_count");
        
        if (error) {
          console.error("Error incrementing visitor count:", error);
          // Fallback: just fetch the current count
          const { data: counterData } = await supabase
            .from("visitor_counter")
            .select("count")
            .limit(1)
            .maybeSingle();
          
          if (counterData) {
            setCount(counterData.count);
          }
        } else {
          setCount(data);
        }
      } catch (err) {
        console.error("Error with visitor counter:", err);
      }
    };

    incrementAndFetch();
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
      <Users className="w-4 h-4" />
      <span>
        <span className="font-semibold text-foreground">{count.toLocaleString()}</span> visitors
      </span>
    </div>
  );
};

export default VisitorCounter;
