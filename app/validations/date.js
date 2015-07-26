import Validation from 'ember-stickler/validation';

export default Validation.create({
  validate(value, errors) {
    const result = /Invalid|NaN/.test(new Date(value).toString());
    if (result) {
      const message = this.getWithDefault('dateMessage', 'Please enter a valid date.');

      errors.push(message);
    }

    return errors;
  }
});