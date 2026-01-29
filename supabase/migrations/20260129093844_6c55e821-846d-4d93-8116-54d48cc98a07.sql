-- Create a table to store visitor count
CREATE TABLE public.visitor_counter (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  count BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.visitor_counter ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the counter
CREATE POLICY "Anyone can read visitor count" 
ON public.visitor_counter 
FOR SELECT 
USING (true);

-- Create a function to increment the counter
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.visitor_counter 
  SET count = count + 1, updated_at = now()
  WHERE id = (SELECT id FROM public.visitor_counter LIMIT 1)
  RETURNING count INTO new_count;
  
  -- If no row exists, create one
  IF new_count IS NULL THEN
    INSERT INTO public.visitor_counter (count) VALUES (1)
    RETURNING count INTO new_count;
  END IF;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Insert initial counter row
INSERT INTO public.visitor_counter (count) VALUES (0);