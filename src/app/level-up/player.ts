export class Player {

  level: number;
  experience: number;

  constructor(level: number, experience: number) {
    this.level = level;
    this.experience = experience;
  }


  newDay(){
    if(this.experience > 100){
      this.resetExperience();
    }
    this.updateExperience();

    if(this.experience < 0){
      this.resetExperience();
    }
    if(this.level < 0){
      this.level = 0
    }
    if(this.experience >= 100 && this.level < 10){
      let excessexperience = this.experience - 100 ;
      this.updateLevel();
      this.resetExperience();
      excessexperience = this.experience + excessexperience;
  }
  }

  resetExperience(){
    this.experience = 0;
  }

  updateExperience(){
    this.experience += 10;
  }

  updateLevel(){
    this.level += 1
  }
}




