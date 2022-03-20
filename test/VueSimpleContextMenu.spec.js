import { shallowMount } from '@vue/test-utils';
import VueSimpleContextMenu from '@/vue-simple-context-menu.vue';

describe('VueSimpleContextMenu.vue', () => {
  it('Sets props correctly', async () => {
    let initialPropsData = {
      elementId: 'myPanel1',
      options: [
        {
          name: 'Duplicate',
          slug: 'duplicate',
        },
        {
          name: 'Edit',
          slug: 'edit',
        },
        {
          name: 'Delete',
          slug: 'delete',
        },
      ],
    };

    const wrapper = shallowMount(VueSimpleContextMenu, {
      props: {
        elementId: initialPropsData.elementId,
        options: initialPropsData.options,
      },
    });

    expect(wrapper.vm.elementId).toBe(initialPropsData.elementId);
    expect(wrapper.vm.options).toEqual(initialPropsData.options);
  });

  it('Shows menu on click', async () => {
    let initialPropsData = {
      elementId: 'myPanel1',
      options: [
        {
          name: 'Duplicate',
          slug: 'duplicate',
        },
        {
          name: 'Edit',
          slug: 'edit',
        },
        {
          name: 'Delete',
          slug: 'delete',
        },
      ],
    };

    const wrapper = shallowMount(VueSimpleContextMenu, {
      propsData: {
        elementId: initialPropsData.elementId,
        options: initialPropsData.options,
      },
    });

    // Make some test data
    var testEvent = new Event('click', { bubbles: true, cancelable: false });
    let testItem = { name: 'Jim', job: 'Salesman' };

    // Trigger the showing of the menu
    wrapper.vm.showMenu(testEvent, testItem);

    // Menu show be showing our selected item
    expect(wrapper.vm.item.name).toBe('Jim');
    expect(wrapper.vm.item.name).toBe('Jim');
  });

  it('Emits event on menu item selection', async () => {
    let initialPropsData = {
      elementId: 'myPanel1',
      options: [
        {
          name: 'Duplicate',
          slug: 'duplicate',
        },
        {
          name: 'Edit',
          slug: 'edit',
        },
        {
          name: 'Delete',
          slug: 'delete',
        },
      ],
    };

    const wrapper = shallowMount(VueSimpleContextMenu, {
      propsData: {
        elementId: initialPropsData.elementId,
        options: initialPropsData.options,
      },
    });

    // Make some test data
    var testEvent = new Event('click', { bubbles: true, cancelable: false });
    let testItem = { name: 'Jim', job: 'Salesman' };

    // Trigger the showing of the menu
    wrapper.vm.showMenu(testEvent, testItem);

    // Menu show be showing our selected item
    expect(wrapper.vm.item.name).toBe('Jim');
    expect(wrapper.vm.item.job).toBe('Salesman');

    // Manually click an item on the menu
    // Here we know the options because we set them earlier
    wrapper.vm.optionClicked(initialPropsData[0]);

    // Check the event was emitted properly
    expect(wrapper.emitted('option-clicked')).toBeTruthy();
  });
});
