import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'rkmtitlecase'
})
export class RkMTitleCasePipe implements PipeTransform {

  /**
   * From: https://capitalizemytitle.com/
   * In general, the following capitalization rules apply       across the four styles in title case:
       Capitalize the first word in the title
       Capitalize the last word in the title
       Capitalize the important words in the title

   Important words in that last bullet generally refer to:

       Adjectives (tiny, large, etc.)
       Adverbs (quietly, smoothly, etc.)
       Nouns (tablet, kitchen, book)
       Pronouns (they, she, he)
       Subordinating conjunctions (as, so, that)
       Verbs (write, type, create)

   Words Not Capitalized in Title Case
       Articles (a, an, the)
       Coordinating Conjunctions (and, but, for)
       Short (less than 5 letters) Prepositions (at, by, from, of)

   *
   */




  transform(value: string): string {
    if (!value) return null;
    let words = value.split(' ');

    for(var idx = 0; idx < words.length; idx++){
      let word = words[idx];

      if(idx > 0 && this.isPreposition(word))
        words[idx] = words[idx].toLowerCase();
       else
       words[idx] =  this.toTitleCase(word);

    }

    return words.join(' ');

  }

  private isPreposition(word: string): boolean{
    let   prepositions = [ 'a', 'an', 'the', 'and', 'but', 'for', 'at', 'by', 'from', 'of', 'in', 'nor', 'etc', 'on' ];
     return _.includes(prepositions, word.toLowerCase());
  }

  private toTitleCase(word: string): string {
   return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
