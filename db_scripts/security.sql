CREATE POLICY "Enable delete for users based on user_id" 
ON public.addresses 
FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Enable insert for users based on user_id" 
ON public.addresses 
FOR INSERT USING (auth.uid() = user_id);

CREATE POLICY "Enable delete for users based on user_id" ON public.addresses FOR ALL USING ((auth.uid() = user_id);) WITH CHECK ((auth.uid() = user_id););
