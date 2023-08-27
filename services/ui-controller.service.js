class UIController {
   static selectedTerm = null;

   static createTerm(name) {
      if(name.trim() === '') {
         console.error(`Term name cannot be empty`);
         return;
      }
      if(Term.list.find(term => term.name == name)) {
         console.error(`Term '${name}' already exists`);
         return;
      }
      const term = new Term(name);
      this.selectTerm(term);
      return term;
   }

   static selectTerm(term) {
      this.selectedTerm = term;
   }
}
