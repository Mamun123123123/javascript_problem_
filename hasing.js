let set = new Set()
set.add(2)
set.add(4)
set.add(3)
console.log(set);
console.log(set.has(2));
console.log(set.size);
set.delete(2)
console.log(set);

for (const a of set) {
         console.log(a);
             
}

