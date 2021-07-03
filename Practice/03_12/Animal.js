class Animal {
  constructor(race, age, sex, name) {
    this.race = race;
    this.sex = sex;
    this.name = name;
    this.age = age;
  }
  change_name(new_name) {
    this.name = new_name;
  }
  increase_age(increase_amount) {
    this.age += increase_amount;
  }
}

export default Animal;
