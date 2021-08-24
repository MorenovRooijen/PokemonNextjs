const IF = ({ children, condition }) => {
  if (condition) {
    // render children if the condition is truthy
    return children;
  }

  return null;
};

/**
 * Use the component as follows:
 *
 * <IF condition={condition}>
 *   <Greeter username={user.name} />
 * </IF>
 */

export default IF;
