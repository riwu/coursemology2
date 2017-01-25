import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'CREATE_SURVEY_REQUEST',
  'CREATE_SURVEY_SUCCESS',
  'CREATE_SURVEY_FAILURE',
  'LOAD_SURVEY_REQUEST',
  'LOAD_SURVEY_SUCCESS',
  'LOAD_SURVEY_FAILURE',
  'SURVEY_FORM_SHOW',
  'SURVEY_FORM_HIDE',
  'SET_SURVEY_NOTIFICATION',
  'RESET_SURVEY_NOTIFICATION',
]);

export default actionTypes;
