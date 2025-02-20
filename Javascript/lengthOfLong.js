// Length of the longest substring


function longestSubstring(string){
    const set = new Set()
    let left = 0;
    let maxLength = 0
    for(let i = 0; i < string.length; i++){

        while(set.has(string[i])){
            set.delete(string[left])
            left++
        }
        set.add(string[i])
        maxLength = Math.max(maxLength, (i - left) + 1)
    }

    console.log(maxLength)
}

longestSubstring('pwwkew')
longestSubstring('abcabcbb')
longestSubstring('bbbbb')