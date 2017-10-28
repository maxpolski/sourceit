class ValidatorBase {
  constructor(errorMessage) {
    this._errorMessage = errorMessage;
    this.isValid = false;
  }

  validate() {
    throw new Error('Method validate should be overloaded');
  }

  get errorMessage() {
    return this._errorMessage;
  }
}

class LengthValidator extends ValidatorBase {
  constructor(requiredLength = 3) {
    super('Length of the string should be more than ' + requiredLength);
    this.requiredLength = requiredLength;
  }

  validate(stringToBeChecked) {
    if (stringToBeChecked.length >= this.requiredLength) {
      this.isValid = true;
    }
  }
}

class AgeValidator extends ValidatorBase {
  constructor(requiredAge = 18) {
    super('Age should be greater than ' + requiredAge);
    this.requiredAge = requiredAge;
  }

  validate(age) {
    if (age >= this.requiredAge) {
      this.isValid = true;
    }
  }
}

const userName = '}{' //'}{ottaбь)4';
const age = 17;

const lengthValidator = new LengthValidator();
const ageValidator = new AgeValidator();

lengthValidator.validate(userName);
ageValidator.validate(age);

if (!lengthValidator.isValid) {
  console.log(lengthValidator.errorMessage);
}

if (!ageValidator.isValid) {
  console.log(ageValidator.errorMessage);
}
