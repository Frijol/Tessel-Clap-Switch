// Takes a triggering value for ambient sound,
// toggles relay 1 when that trigger is hit.

var tessel = require('tessel');
var relay = require('relay-mono').use(tessel.port('A'));
var ambient = require('ambient-attx4').use(tessel.port('B'));

// Sound level (0-1) needed to trigger. You may need to adjust this.
var triggerVal = 0.22;

// When the module is connected
ambient.on('ready', function () {
  // Set the sound trigger
  ambient.setSoundTrigger(0.22);

  // When the sound trigger is reached
  ambient.on('sound-trigger', function triggerHit() {
    // Toggle the switch
    relay.toggle(1);
  });
});
