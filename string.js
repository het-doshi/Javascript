var leet = function( haystring ,  needle)
{
      s1 = String(haystring)
      s2 = String(needle)

      if(s1.includes(s2))
      {
        index = s1.search(s2);
        return index
      }
      else
      {
        return 0;
      }
}

// console.log(leet("sadbutsad","sad"));

var lengthOfLastWord = function(s) {
    s1 = s.trim()
    words = s1.split(' ')
    len = words.length
    str = words[len - 1]
    wordlen =  str.length 
    return wordlen
};


// console.log(lengthOfLastWord("  fly me   to   the moon  "));


var isAnagram = function(s, t) {
    
    lens1 = s.length; lens2 = t.length;

    if(lens1 !== lens2)
    {
        return false
    }
    else
    {
        char1 = Array.from(s)
        char2 = Array.from(t)

       ss1 = char1.sort()
       ss2 = char2.sort()

      for (let i = 0; i < ss1.length; i++) {
        if (ss1[i] != ss2[i]) 
        {
            return false;
        }

        }

        return true; 
        
    }
    }

    console.log(isAnagram("rat", "car"));
