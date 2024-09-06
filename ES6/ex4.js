class greet {
  constructor(text) {
    this.text = text;
  }
  // method
  greet() {
    console.log(`${this.text} from Cambodia...!`);
  }
}
const say = new greet("Hello,");
say.greet();
