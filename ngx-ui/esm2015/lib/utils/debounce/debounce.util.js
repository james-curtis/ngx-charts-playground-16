/**
 * Debounce a function
 *
 * @param func      function to executoe
 * @param wait      wait duration
 * @param immediate wait or immediate executue
 */
export const debounce = (func, wait, immediate) => {
    let timeout;
    let args;
    let context;
    let timestamp;
    let result;
    return function () {
        context = this;
        // eslint-disable-next-line prefer-rest-params
        args = arguments;
        timestamp = new Date();
        function later() {
            const now = new Date();
            const last = now.getTime() - timestamp.getTime();
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                }
            }
        }
        const callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2UudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3V0aWxzL2RlYm91bmNlL2RlYm91bmNlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBZ0IsRUFBRSxJQUFZLEVBQUUsU0FBbUIsRUFBZSxFQUFFO0lBQzNGLElBQUksT0FBWSxDQUFDO0lBQ2pCLElBQUksSUFBZ0IsQ0FBQztJQUNyQixJQUFJLE9BQVksQ0FBQztJQUNqQixJQUFJLFNBQWUsQ0FBQztJQUNwQixJQUFJLE1BQVcsQ0FBQztJQUVoQixPQUFPO1FBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNmLDhDQUE4QztRQUM5QyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXZCLFNBQVMsS0FBSztZQUNaLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdkIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVqRCxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7Z0JBQ2YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2FBQ0Y7UUFDSCxDQUFDO1FBRUQsTUFBTSxPQUFPLEdBQUcsU0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEZWJvdW5jZSBhIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIGZ1bmMgICAgICBmdW5jdGlvbiB0byBleGVjdXRvZVxuICogQHBhcmFtIHdhaXQgICAgICB3YWl0IGR1cmF0aW9uXG4gKiBAcGFyYW0gaW1tZWRpYXRlIHdhaXQgb3IgaW1tZWRpYXRlIGV4ZWN1dHVlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jOiAoKSA9PiB2b2lkLCB3YWl0OiBudW1iZXIsIGltbWVkaWF0ZT86IGJvb2xlYW4pOiAoKCkgPT4gYW55KSA9PiB7XG4gIGxldCB0aW1lb3V0OiBhbnk7XG4gIGxldCBhcmdzOiBJQXJndW1lbnRzO1xuICBsZXQgY29udGV4dDogYW55O1xuICBsZXQgdGltZXN0YW1wOiBEYXRlO1xuICBsZXQgcmVzdWx0OiBhbnk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuXG4gICAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgbGFzdCA9IG5vdy5nZXRUaW1lKCkgLSB0aW1lc3RhbXAuZ2V0VGltZSgpO1xuXG4gICAgICBpZiAobGFzdCA8IHdhaXQpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIH1cblxuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuIl19