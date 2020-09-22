process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|  ','\r/   ','\r-   ','\r\\   ','\r|   '];

const spinSpinner = function(spinner) {
  let time = 100;
  spinner.push("\n");
  for (let spinAn in spinner) {
    setTimeout(() => {
      process.stdout.write(spinner[spinAn]);
    }, time);
    time += 200;
  }
};

spinSpinner(spinner);

  

/*setTimeout(() => { process.stdout.write('\r|   ')}, 100);
  setTimeout(() => { process.stdout.write('\r/   ')}, 300);
  setTimeout(() => { process.stdout.write('\r-   ')}, 500);
  setTimeout(() => { process.stdout.write('\r\\   ')}, 700);
  setTimeout(() => { process.stdout.write('\r\|   ')}, 900);
  setTimeout(() => { process.stdout.write('\r\/   ')}, 1100);
  setTimeout(() => { process.stdout.write('\r\-   ')}, 1300);
  setTimeout(() => { process.stdout.write('\r\\   ')}, 1500);
  setTimeout(() => { process.stdout.write('\r\|   \n')}, 1700);*/
