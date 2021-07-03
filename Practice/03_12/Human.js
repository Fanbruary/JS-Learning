class Human {
  //constructor
  constructor(
    sex,
    race,
    age,
    hobbies,
    friends //properties
  ) {
    this.sex = sex;
    this.race = race;
    this.age = age;
    this.hobbies = hobbies;
    this.friends = friends;
  }
  // methods
  add_friends() {
    this.friends = ["John", "Michael", "Amy", "Sheldon"];
  }
  toggle_sex() {
    if (this.sex == "male") {
      this.sex = "female";
    } else {
      this.sex = "male";
    }
  }
  change_age(new_age) {
    this.age = new_age;
  }
}

export default Human;
