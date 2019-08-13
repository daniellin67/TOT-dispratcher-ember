import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    vip: DS.attr('boolean'),
    time: DS.attr('string'),
    phone: DS.attr('string'),
    address: DS.attr('string'),
    line: DS.attr(),
    'num-driver': DS.attr(),
    ddv: DS.attr(),
    dtv: DS.attr(),
    'car-type': DS.attr(),
    chanel: DS.attr(),
    state: DS.attr()
});
