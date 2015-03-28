#import "ProfileViewController.h"

@implementation ProfileViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = @"Profile";
        self.tabBarItem.image = [UIImage imageNamed:@"tab_icon_profile"];
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];

    //Create a Button 
    UIButton *profileButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    [profileButton setImage:[UIImage imageNamed:@"higgie_profile_image"] forState:UIControlStateNormal];
    [profileButton setImage:[UIImage imageNamed:@"higgie_profile_image"] forState:UIControlStateHighlighted];
    profileButton.frame = CGRectMake(15, 15, 200, 189);

    //Add button to parent view and add an action listener 
    [self.view addSubview:profileButton];
    [profileButton addTarget:self action:@selector(showZoomedProfile:) forControlEvents:UIControlEventTouchUpInside];
}


/**
*This method includes the logic for when a button is pressed
*@param UIButton sender 
*/
- (void) showZoomedProfile: (UIButton *) sender
{

    //On the fly we create a new view controller 
    UIViewController *imageViewController = [[UIViewController alloc] init];
    imageViewController.view.frame = self.view.frame;
    imageViewController.title = @"Profile Image";

    //WE then create an image view that will go inside of the "onTheFly" viewcontroller
    UIImageView *imageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"higgie_profile_image"]];
    imageView.frame = imageViewController.view.frame;
    imageView.contentMode = UIViewContentModeScaleAspectFill;
    [imageViewController.view addSubview:imageView];

    //We add the new image view controller to the "navigationStack" so that it will go back to the previos screen. 
    [self.navigationController pushViewController:imageViewController animated:YES];
}

@end



#import "AppDelegate.h"

@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  //We will have to initialize our 
  //We will have to initialize our navigationController HERE! 
}

#import "AppDelegate.h"
#import "FeedViewController.h"
#import "ProfileViewController.h"
#import "FavoritesViewController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

    //** Big Question Below **//
    //Create each veiw controller and initialize with a navigation controller
    //I find it strange that the navigation controller for each view controller is initialized outside of the class itsalf?? 
    FeedViewController *feedViewController = [[FeedViewController alloc] init];
    UINavigationController *feedNavController = [[UINavigationController alloc] initWithRootViewController:feedViewController];

    ProfileViewController *profileViewController = [[ProfileViewController alloc] init];
    UINavigationController *profileNavController = [[UINavigationController alloc] initWithRootViewController:profileViewController];

    FavoritesViewController *favoritesViewController = [[FavoritesViewController alloc] init];
    UINavigationController *favoritesNavController = [[UINavigationController alloc] initWithRootViewController:favoritesViewController];

    UITabBarController *tabController = [[UITabBarController alloc] init];
    tabController.viewControllers = @[feedNavController, favoritesNavController, profileNavController];

    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.rootViewController = tabController;
    [self.window makeKeyAndVisible];
    return YES;
}
@end




#import "ProfileViewController.h"

@implementation ProfileViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = @"Profile";
        self.tabBarItem.image = [UIImage imageNamed:@"tab_icon_profile"];
    }
    return self;
}

//Note: Load view.. whereever it is called creates a view for the view controller


- (void)viewDidLoad
{
    [super viewDidLoad];

    UIButton *profileButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    [profileButton setImage:[UIImage imageNamed:@"higgie_profile_image"] forState:UIControlStateNormal];
    [profileButton setImage:[UIImage imageNamed:@"higgie_profile_image"] forState:UIControlStateHighlighted];
    profileButton.frame = CGRectMake(15, 15, 200, 189);


    //We see here that the button is added to the view that the view controller contatins 
    [self.view addSubview:profileButton];

    //Again we can see a button geting a target or action listener
    [profileButton addTarget:self action:@selector(showZoomedProfile:) forControlEvents:UIControlEventTouchUpInside];
}

- (void) showZoomedProfile: (UIButton *) sender
{
    UIViewController *imageViewController = [[UIViewController alloc] init];

    //It looks like a view must have been created by the base constructor!! 

    imageViewController.view.frame = self.view.frame;
    imageViewController.title = @"Profile Image";

    UIImageView *imageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"higgie_profile_image"]];
    imageView.frame = imageViewController.view.frame;
    imageView.contentMode = UIViewContentModeScaleAspectFill;
    [imageViewController.view addSubview:imageView];

    [self.navigationController pushViewController:imageViewController animated:YES];
}

@end





