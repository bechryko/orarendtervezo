HTMLElement.prototype.createChild = ShadowRoot.prototype.createChild = function(tagName) {
   const child = document.createElement(tagName);
   this.append(child);
   return child;
}
