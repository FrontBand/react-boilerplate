import { addValidation } from 'react-nebo15-validate';

addValidation('validFileFormat', value => value && !!value.match(/\.(jpeg|jpg|png)$/));
