const shuffle = ([...a]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const prepareParams = props => {
  const {difficulty, rows, columns, mines} = props;
  const params = [difficulty];
  if (difficulty === 'custom') {
    params.push(rows, columns, mines);
  }
  return params;
};

class MineFieldGenerator {
  generateField (difficulty, width = 1, height = 1, mines = 0) {
    switch (difficulty) {
      case 'beginner':
        this.width = 9;
        this.height = 9;
        this.mines = 10;
        break;
      case 'intermediate':
        this.width = 13;
        this.height = 15;
        this.mines = 40;
        break;
      case 'expert':
        this.width = 16;
        this.height = 30;
        this.mines = 99;
        break;
      default:
        if (width < 1) {
          throw new Error('lul what');
        }
        if (height < 1) {
          throw new Error('lul what');
        }
        if (mines < 0) {
          throw new Error('lul what');
        }
        this.width = width;
        this.height = height;
        this.mines = mines;
    }

    if (this.width * this.height <= this.mines) {
      throw new Error('lul what');
    }

    const minesLocation = this.distributeMines();
    const field = new Array(this.width);
    for (let row = 0; row < this.width; ++row) {
      field[row] = new Array(this.height);
      for (let column = 0; column < this.height; ++column) {
        field[row][column] = minesLocation.some(([i, j]) => i === row && j === column);
      }
    }
    return field;
  }

  distributeMines () {
    let combinations = [];
    for (let row = 0; row < this.width; ++row) {
      for (let column = 0; column < this.height; ++column) {
        combinations.push([row, column]);
      }
    }
    return shuffle(combinations).slice(0, this.mines);
  }
}

export default MineFieldGenerator;
