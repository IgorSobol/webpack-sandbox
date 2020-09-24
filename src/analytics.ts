import * as $ from 'jquery';

function createAnalytics(): object {
  let counter = 0;
  let isDestroyed: boolean = false;

  const listener = (): number => counter++;

  $(document).on('click', listener)

  return {
    destroy(){
      $(document).off('click', listener)
      isDestroyed = !isDestroyed;
    },

    getClick() {
      if (isDestroyed){
        isDestroyed = true;
        return `Analytics is destroyedz = ${counter}`
      }
      return counter;
    }
  }
}

window['analytics'] = createAnalytics()
