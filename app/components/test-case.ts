import Component from '@glimmer/component';
import { Resource, useResource } from 'ember-resources';

class TestResource extends Resource {}

export default class TestCaseComponent extends Component {
  test = useResource(this, TestResource, () => []);
}
