const solution = (myString, pat) => [...myString].map(ch=> ch === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0
    
    
    
