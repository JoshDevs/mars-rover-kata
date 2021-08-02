/*
Mars Rover Kata.

TODO: Think about cleaning up the file. DRY and SOLID principles can be used further.
 */
export const marsRover = (size: string, position: string, instructions: string): string => {
    if (size.length === 0 || position.length === 0 || instructions.length === 0)
    {
        return 'Fatal Error: Check Input';
    }
 
    var instructionsArr = instructions.split(''); 
    var positionArr = position.split(' ');
    var sizeArr = size.split(' ');
    var result: string | null = null;

    instructionsArr.forEach(element => {
        if (element === 'R')
        {
            result = turnRight(positionArr);
        }

        if (element === 'L')
        {
            result = turnLeft(positionArr);
        }

        if (element === 'M')
        {
            result = move(positionArr, sizeArr);
        }
    });

    return result;
}

const turnRight = (position: string[]): string => {

    if (position[2] === 'N')
    {
        position[2] = 'E';
        return position.join(' ');
    }

    if (position[2] === 'E')
    {
        position[2] = 'S';

        return position.join(' ');
    }

    if (position[2] === 'S')
    {
        position[2] = 'W';
        return position.join(' ');
    }

    if (position[2] === 'W')
    {
        position[2] = 'N';
        return position.join(' ');
    }

    return 'Fatal Error: Check Input';
}

const turnLeft = (position: string[]): string => {

    if (position[2] === 'N')
    {
        position[2] = 'W';
        return position.join(' ');
    }

    if (position[2] === 'E')
    {
        position[2] = 'N';

        return position.join(' ');
    }

    if (position[2] === 'S')
    {
        position[2] = 'E';
        return position.join(' ');
    }

    if (position[2] === 'W')
    {
        position[2] = 'S';
        return position.join(' ');
    }

    return 'Fatal Error: Check Input';
}

const move = (position: string[], size: string[]): string => {
    var xAxis = parseInt(position[0]);
    var yAxis = parseInt(position[1]);
    var xMax = parseInt(size[0]);
    var yMax = parseInt(size[1]);
    var min = 0
    var temp = 0;

    if (position[2] === 'N')
    {
        temp = yAxis + 1;
        if (temp >= min && temp <= yMax)
        {
            position[1] = temp.toString();
            return position.join(' ');
        }
    }

    if (position[2] === 'E' && xAxis >= 0 && xAxis <= xMax)
    {
        temp = xAxis + 1;
        if (temp >= min && temp <= xMax)
        {
            position[0] = temp.toString();
            return position.join(' ');
        }
    }

    if (position[2] === 'S')
    {
        temp = yAxis - 1;
        if (temp >= min && temp <= yMax)
        {
            position[1] = temp.toString();
            return position.join(' ');
        }
    }

    if (position[2] === 'W' && xAxis >= 0 && xAxis <= xMax)
    {
        temp = xAxis - 1;
        if (temp >= min && temp <= xMax)
        {
            position[0] = temp.toString();
            return position.join(' ');
        }
    }

    return 'Fatal Error: Check Input';
}