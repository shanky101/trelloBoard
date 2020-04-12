// Container Operations

// This allows persistance of data of items shown in UI
// This is not used in the project but can be plugged in if persistance across page reloads is needed(After pushing them to local storage)
// Two constructor functions one at container level and other at individual card level
// are designed to act like a (Redux)store

function GlobalOperation() {
    this.mainContainer = [];
}

Object.defineProperty(GlobalOperation.prototype, 'accessContainer', {
    get: function() {
        return this.mainContainer
    },

    set: function(arr) {
        this.mainContainer = arr;
    }
})

GlobalOperation.prototype.addContainer= function(val) {
    this.accessContainer.push(val)
}

GlobalOperation.prototype.removeContainer= function(val) {
    this.accessContainer = this.accessContainer.filter(item => item.id != val)
}

// Individual card operations
function Operation(rootContainer) {
    this.rootContainer = rootContainer
}

Operation.prototype.addItem = function(data,destinationID,itemID) {
    let check = this.rootContainer.mainContainer.find(({id}) => id === destinationID)
    if(check) {
        this.rootContainer.mainContainer.map(_ => {
        if(_.id === destinationID) {
          _.data.push({
            id: itemID,
            value: data
          })
        }
      })
    }
}

Operation.prototype.deleteItem = function(itemID,destinationID) {
    this.rootContainer.mainContainer.map(_ => {
    if(_.id === destinationID) {
        _.data = _.data.filter(item => item.id != itemID)
    }
  })
}

Operation.prototype.editItem = function(itemID,destinationID, newVal) {
    this.rootContainer.mainContainer.map(_ => {
      if(_.id === destinationID) {
          _.data.map(item => {
            if(item.id === itemID) {
                item.value = newVal
            }
          })
      }
    })
  }