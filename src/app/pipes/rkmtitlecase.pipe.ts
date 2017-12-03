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

  excludeWords = [
    'a', 'an', 'the', 'and', 'but', 'for', 'at', 'by', 'from', 'of' ]


  transform(value: string, args?: any): string {
    if (!value) return value;
    let searchWord = _.lowerCase(value);
    let isFound: any = _.find(this.excludeWords, searchWord);

    console.log("Search excludeWords is: ", isFound);

  }


}

function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
